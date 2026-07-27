import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-mexico');
}

export default function MiracleNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-mexico" />;
}
