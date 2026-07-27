import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-custom-map-servers');
}

export default function Classicus11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-custom-map-servers" />;
}
