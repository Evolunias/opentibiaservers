import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-real-map-servers');
}

export default function Classicus84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-real-map-servers" />;
}
