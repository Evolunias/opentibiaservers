import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-real-map-servers');
}

export default function Unline15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-15-real-map-servers" />;
}
