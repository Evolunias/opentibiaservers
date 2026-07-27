import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-canada');
}

export default function AureraGlobalNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-canada" />;
}
