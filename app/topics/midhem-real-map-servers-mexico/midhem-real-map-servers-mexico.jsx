import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-mexico');
}

export default function MidhemRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-mexico" />;
}
