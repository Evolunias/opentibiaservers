import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-custom-map-servers');
}

export default function ClassickDrakoria15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-custom-map-servers" />;
}
