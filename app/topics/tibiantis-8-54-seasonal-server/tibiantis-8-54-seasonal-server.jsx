import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-seasonal-server');
}

export default function Tibiantis854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-seasonal-server" />;
}
