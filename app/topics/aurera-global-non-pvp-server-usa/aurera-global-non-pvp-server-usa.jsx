import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-usa');
}

export default function AureraGlobalNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-usa" />;
}
