import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-france');
}

export default function MidhemCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-france" />;
}
