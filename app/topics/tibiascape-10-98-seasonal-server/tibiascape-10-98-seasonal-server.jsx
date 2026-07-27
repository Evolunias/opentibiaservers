import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-seasonal-server');
}

export default function Tibiascape1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-seasonal-server" />;
}
