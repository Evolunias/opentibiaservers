import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-poland');
}

export default function NtoStarCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-poland" />;
}
