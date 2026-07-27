import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-south-america-servers');
}

export default function ClassickDrakoriaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-south-america-servers" />;
}
