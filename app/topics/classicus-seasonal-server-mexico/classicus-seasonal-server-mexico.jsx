import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-mexico');
}

export default function ClassicusSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-mexico" />;
}
