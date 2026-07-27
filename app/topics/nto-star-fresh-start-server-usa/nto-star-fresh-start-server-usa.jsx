import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-usa');
}

export default function NtoStarFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-usa" />;
}
