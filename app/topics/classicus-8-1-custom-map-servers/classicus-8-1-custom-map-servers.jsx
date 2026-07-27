import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-custom-map-servers');
}

export default function Classicus81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-custom-map-servers" />;
}
