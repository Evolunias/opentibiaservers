import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-sweden');
}

export default function ClassickDrakoriaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-sweden" />;
}
