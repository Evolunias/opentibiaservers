import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-france');
}

export default function MidhemRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-france" />;
}
