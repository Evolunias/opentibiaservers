import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-seasonal-server');
}

export default function Tibiaorigins12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-seasonal-server" />;
}
