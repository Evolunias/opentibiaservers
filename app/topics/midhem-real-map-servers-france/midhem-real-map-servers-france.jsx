import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-france');
}

export default function MidhemRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-france" />;
}
