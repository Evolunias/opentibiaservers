import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-real-map-servers');
}

export default function Classicus14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-real-map-servers" />;
}
