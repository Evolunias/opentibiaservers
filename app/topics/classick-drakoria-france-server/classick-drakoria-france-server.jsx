import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-france-server');
}

export default function ClassickDrakoriaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-france-server" />;
}
