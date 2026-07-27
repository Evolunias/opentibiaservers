import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-brazil-servers');
}

export default function ClassickDrakoriaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-brazil-servers" />;
}
