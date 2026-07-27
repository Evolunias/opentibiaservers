import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-seasonal-server');
}

export default function Tibiantis76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-seasonal-server" />;
}
