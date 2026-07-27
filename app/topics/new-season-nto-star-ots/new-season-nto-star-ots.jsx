import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-ots');
}

export default function NewSeasonNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-ots" />;
}
