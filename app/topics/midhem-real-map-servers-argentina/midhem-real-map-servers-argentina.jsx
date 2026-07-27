import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-argentina');
}

export default function MidhemRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-argentina" />;
}
