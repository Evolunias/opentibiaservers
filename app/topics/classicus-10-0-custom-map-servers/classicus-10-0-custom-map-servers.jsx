import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-custom-map-servers');
}

export default function Classicus100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-custom-map-servers" />;
}
