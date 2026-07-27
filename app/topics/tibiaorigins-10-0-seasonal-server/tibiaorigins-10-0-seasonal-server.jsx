import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-seasonal-server');
}

export default function Tibiaorigins100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-seasonal-server" />;
}
