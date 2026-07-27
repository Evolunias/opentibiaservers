import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-fun-server');
}

export default function ClassickDrakoriaFunServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-fun-server" />;
}
