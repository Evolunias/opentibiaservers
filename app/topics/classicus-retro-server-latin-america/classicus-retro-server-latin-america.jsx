import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-latin-america');
}

export default function ClassicusRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-latin-america" />;
}
