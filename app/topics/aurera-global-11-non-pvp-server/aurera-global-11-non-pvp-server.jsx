import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-non-pvp-server');
}

export default function AureraGlobal11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-non-pvp-server" />;
}
