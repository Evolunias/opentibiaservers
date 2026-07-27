import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-uk');
}

export default function ClassickDrakoriaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-uk" />;
}
