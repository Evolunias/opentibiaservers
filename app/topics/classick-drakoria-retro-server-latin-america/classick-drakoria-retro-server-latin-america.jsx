import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-latin-america');
}

export default function ClassickDrakoriaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-latin-america" />;
}
