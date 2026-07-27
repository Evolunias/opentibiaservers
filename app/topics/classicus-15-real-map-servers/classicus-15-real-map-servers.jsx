import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-real-map-servers');
}

export default function Classicus15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-real-map-servers" />;
}
