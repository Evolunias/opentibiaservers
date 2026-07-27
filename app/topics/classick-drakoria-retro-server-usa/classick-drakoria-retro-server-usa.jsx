import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-usa');
}

export default function ClassickDrakoriaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-usa" />;
}
