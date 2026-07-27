import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-uk');
}

export default function NtoStarCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-uk" />;
}
