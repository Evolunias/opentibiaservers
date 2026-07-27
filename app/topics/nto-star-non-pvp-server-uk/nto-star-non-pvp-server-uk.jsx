import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-uk');
}

export default function NtoStarNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-uk" />;
}
