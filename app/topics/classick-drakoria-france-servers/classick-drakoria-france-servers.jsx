import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-france-servers');
}

export default function ClassickDrakoriaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-france-servers" />;
}
