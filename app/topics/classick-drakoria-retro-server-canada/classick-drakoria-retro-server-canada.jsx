import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-canada');
}

export default function ClassickDrakoriaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-canada" />;
}
