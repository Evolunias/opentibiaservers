import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-uk');
}

export default function KasteriaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-uk" />;
}
