import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-real-map-servers');
}

export default function Classicus86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-real-map-servers" />;
}
