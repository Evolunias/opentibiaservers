import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-france');
}

export default function ArcaniarlCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-france" />;
}
