import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-usa');
}

export default function MiracleNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-usa" />;
}
