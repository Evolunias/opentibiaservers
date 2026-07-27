import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-custom-map-servers');
}

export default function ClassickDrakoria74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-custom-map-servers" />;
}
