import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-poland');
}

export default function MiracleNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-poland" />;
}
