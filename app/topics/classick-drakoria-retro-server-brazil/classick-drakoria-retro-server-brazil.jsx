import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-brazil');
}

export default function ClassickDrakoriaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-brazil" />;
}
