import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-france');
}

export default function RealestaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-france" />;
}
