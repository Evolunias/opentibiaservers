import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-real-map-servers');
}

export default function Classicus96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-real-map-servers" />;
}
