import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-france');
}

export default function NtoStarFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-france" />;
}
