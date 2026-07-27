import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-non-pvp-server');
}

export default function AureraGlobal12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-non-pvp-server" />;
}
