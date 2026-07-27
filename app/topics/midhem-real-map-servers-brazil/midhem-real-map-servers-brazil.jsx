import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-brazil');
}

export default function MidhemRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-brazil" />;
}
