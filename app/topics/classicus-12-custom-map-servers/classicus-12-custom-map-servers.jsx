import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-custom-map-servers');
}

export default function Classicus12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-custom-map-servers" />;
}
