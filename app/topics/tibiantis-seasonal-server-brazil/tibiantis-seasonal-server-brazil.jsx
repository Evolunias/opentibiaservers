import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-brazil');
}

export default function TibiantisSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-brazil" />;
}
