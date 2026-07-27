import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-seasonal-server');
}

export default function Tibiascape14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-seasonal-server" />;
}
