import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-real-map-servers');
}

export default function Classicus100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-real-map-servers" />;
}
