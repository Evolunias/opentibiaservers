import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-brazil');
}

export default function ClassicusRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-brazil" />;
}
