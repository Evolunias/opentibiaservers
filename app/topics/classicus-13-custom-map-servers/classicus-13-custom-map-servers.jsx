import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-custom-map-servers');
}

export default function Classicus13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-custom-map-servers" />;
}
