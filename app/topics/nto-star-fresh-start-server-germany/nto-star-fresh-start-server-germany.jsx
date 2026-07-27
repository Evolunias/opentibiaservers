import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-germany');
}

export default function NtoStarFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-germany" />;
}
