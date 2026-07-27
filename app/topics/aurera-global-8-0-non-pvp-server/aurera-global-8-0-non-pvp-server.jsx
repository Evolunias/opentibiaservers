import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-non-pvp-server');
}

export default function AureraGlobal80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-non-pvp-server" />;
}
