import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-north-america');
}

export default function AureraGlobalNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-north-america" />;
}
