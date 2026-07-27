import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-mexico');
}

export default function MidhemRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-mexico" />;
}
