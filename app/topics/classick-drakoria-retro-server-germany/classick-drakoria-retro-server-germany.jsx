import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-germany');
}

export default function ClassickDrakoriaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-germany" />;
}
