import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-argentina');
}

export default function ClassickDrakoriaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-argentina" />;
}
