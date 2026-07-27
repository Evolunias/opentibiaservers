import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-seasonal-server');
}

export default function Tibiaorigins14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-seasonal-server" />;
}
