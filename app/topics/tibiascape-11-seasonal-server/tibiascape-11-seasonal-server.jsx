import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-seasonal-server');
}

export default function Tibiascape11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-seasonal-server" />;
}
