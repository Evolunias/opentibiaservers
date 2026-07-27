import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-mexico');
}

export default function ClassickDrakoriaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-mexico" />;
}
