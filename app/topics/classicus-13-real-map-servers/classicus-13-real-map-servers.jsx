import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-real-map-servers');
}

export default function Classicus13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-real-map-servers" />;
}
