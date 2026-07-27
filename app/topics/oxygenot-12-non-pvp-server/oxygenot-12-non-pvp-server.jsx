import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-non-pvp-server');
}

export default function Oxygenot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-non-pvp-server" />;
}
