import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-seasonal-server');
}

export default function Tibijka1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-seasonal-server" />;
}
