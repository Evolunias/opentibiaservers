import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-server');
}

export default function NewSeasonNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-server" />;
}
