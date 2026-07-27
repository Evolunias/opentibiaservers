import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-custom-map-servers');
}

export default function ClassickDrakoria76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-custom-map-servers" />;
}
