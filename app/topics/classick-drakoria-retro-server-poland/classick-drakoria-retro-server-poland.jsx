import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-poland');
}

export default function ClassickDrakoriaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-poland" />;
}
