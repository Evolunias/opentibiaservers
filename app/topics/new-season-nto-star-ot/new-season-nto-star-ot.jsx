import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-ot');
}

export default function NewSeasonNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-ot" />;
}
