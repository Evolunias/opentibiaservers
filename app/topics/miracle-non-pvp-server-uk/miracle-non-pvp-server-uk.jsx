import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-uk');
}

export default function MiracleNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-uk" />;
}
