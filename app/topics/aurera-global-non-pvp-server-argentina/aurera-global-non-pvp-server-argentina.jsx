import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-argentina');
}

export default function AureraGlobalNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-argentina" />;
}
