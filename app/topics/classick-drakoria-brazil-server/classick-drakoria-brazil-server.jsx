import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-brazil-server');
}

export default function ClassickDrakoriaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-brazil-server" />;
}
