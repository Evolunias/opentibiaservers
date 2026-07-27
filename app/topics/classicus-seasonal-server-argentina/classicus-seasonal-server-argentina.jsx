import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-argentina');
}

export default function ClassicusSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-argentina" />;
}
