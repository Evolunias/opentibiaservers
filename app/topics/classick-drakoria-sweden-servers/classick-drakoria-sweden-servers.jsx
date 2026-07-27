import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-sweden-servers');
}

export default function ClassickDrakoriaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-sweden-servers" />;
}
