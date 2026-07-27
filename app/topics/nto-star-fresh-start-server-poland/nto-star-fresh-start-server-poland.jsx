import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-poland');
}

export default function NtoStarFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-poland" />;
}
