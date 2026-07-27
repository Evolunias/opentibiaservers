import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-north-america-server');
}

export default function ClassickDrakoriaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-north-america-server" />;
}
