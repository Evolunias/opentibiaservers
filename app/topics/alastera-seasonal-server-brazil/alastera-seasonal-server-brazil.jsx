import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-brazil');
}

export default function AlasteraSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-brazil" />;
}
