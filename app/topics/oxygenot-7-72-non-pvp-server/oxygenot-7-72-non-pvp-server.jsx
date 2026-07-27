import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-non-pvp-server');
}

export default function Oxygenot772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-non-pvp-server" />;
}
