import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-france');
}

export default function ClassicusSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-france" />;
}
