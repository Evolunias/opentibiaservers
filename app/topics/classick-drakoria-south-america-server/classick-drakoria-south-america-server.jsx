import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-south-america-server');
}

export default function ClassickDrakoriaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-south-america-server" />;
}
