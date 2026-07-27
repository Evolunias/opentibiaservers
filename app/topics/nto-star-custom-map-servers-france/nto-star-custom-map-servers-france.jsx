import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-france');
}

export default function NtoStarCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-france" />;
}
