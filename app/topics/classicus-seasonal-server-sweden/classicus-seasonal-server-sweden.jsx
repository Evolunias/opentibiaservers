import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-sweden');
}

export default function ClassicusSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-sweden" />;
}
