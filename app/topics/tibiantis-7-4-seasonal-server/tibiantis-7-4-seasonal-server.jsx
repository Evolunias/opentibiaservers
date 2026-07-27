import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-seasonal-server');
}

export default function Tibiantis74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-seasonal-server" />;
}
