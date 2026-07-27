import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-brazil');
}

export default function ClassicusSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-brazil" />;
}
