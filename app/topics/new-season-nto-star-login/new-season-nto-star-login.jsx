import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-login');
}

export default function NewSeasonNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-login" />;
}
