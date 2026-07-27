import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-custom-map-servers');
}

export default function ClassickDrakoria13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-custom-map-servers" />;
}
