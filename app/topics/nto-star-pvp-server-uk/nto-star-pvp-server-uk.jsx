import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-uk');
}

export default function NtoStarPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-uk" />;
}
