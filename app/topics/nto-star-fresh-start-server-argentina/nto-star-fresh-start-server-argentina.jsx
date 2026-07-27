import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-argentina');
}

export default function NtoStarFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-argentina" />;
}
