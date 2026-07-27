import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-usa');
}

export default function ClassicusSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-usa" />;
}
