import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-real-map-servers');
}

export default function Classicus11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-real-map-servers" />;
}
