import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-seasonal-server');
}

export default function Tibiascape12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-seasonal-server" />;
}
