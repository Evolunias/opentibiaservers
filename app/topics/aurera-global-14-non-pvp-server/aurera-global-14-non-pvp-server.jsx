import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-non-pvp-server');
}

export default function AureraGlobal14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-non-pvp-server" />;
}
