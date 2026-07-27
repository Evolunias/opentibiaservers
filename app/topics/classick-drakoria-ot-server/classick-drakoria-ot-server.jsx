import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-ot-server');
}

export default function ClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-ot-server" />;
}
