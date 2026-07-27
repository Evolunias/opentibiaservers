import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-brazil');
}

export default function MidhemRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-brazil" />;
}
