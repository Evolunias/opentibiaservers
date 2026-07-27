import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-france');
}

export default function ArcaniarlRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-france" />;
}
