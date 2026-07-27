import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-seasonal-server');
}

export default function Tibiantis12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-seasonal-server" />;
}
