import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-custom-map-servers');
}

export default function Classicus15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-custom-map-servers" />;
}
