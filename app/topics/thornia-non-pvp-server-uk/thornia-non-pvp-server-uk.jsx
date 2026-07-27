import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-uk');
}

export default function ThorniaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-uk" />;
}
