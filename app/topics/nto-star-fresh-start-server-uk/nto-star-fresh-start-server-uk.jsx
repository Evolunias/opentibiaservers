import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-uk');
}

export default function NtoStarFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-uk" />;
}
