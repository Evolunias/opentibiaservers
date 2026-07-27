import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-sweden');
}

export default function ClassickDrakoriaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-sweden" />;
}
