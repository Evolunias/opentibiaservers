import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-north-america');
}

export default function NtoStarFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-north-america" />;
}
