import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-seasonal-server');
}

export default function Tibiaorigins13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-seasonal-server" />;
}
