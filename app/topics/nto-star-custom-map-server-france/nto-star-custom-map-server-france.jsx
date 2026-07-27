import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-france');
}

export default function NtoStarCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-france" />;
}
