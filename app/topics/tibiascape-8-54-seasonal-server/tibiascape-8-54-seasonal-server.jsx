import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-seasonal-server');
}

export default function Tibiascape854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-seasonal-server" />;
}
