import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-seasonal-server');
}

export default function Tibiantis11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-seasonal-server" />;
}
