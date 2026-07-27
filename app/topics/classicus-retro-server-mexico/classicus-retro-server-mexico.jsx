import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-mexico');
}

export default function ClassicusRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-mexico" />;
}
