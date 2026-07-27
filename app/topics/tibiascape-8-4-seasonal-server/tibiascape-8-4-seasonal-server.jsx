import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-seasonal-server');
}

export default function Tibiascape84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-seasonal-server" />;
}
