import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-seasonal-server');
}

export default function Tibiascape13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-seasonal-server" />;
}
