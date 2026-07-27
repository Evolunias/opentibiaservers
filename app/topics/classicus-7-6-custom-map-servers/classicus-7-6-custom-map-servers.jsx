import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-custom-map-servers');
}

export default function Classicus76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-custom-map-servers" />;
}
