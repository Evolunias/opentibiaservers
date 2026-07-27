import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-north-america-servers');
}

export default function ClassickDrakoriaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-north-america-servers" />;
}
