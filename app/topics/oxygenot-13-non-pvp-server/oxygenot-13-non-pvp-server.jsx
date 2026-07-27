import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-non-pvp-server');
}

export default function Oxygenot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-non-pvp-server" />;
}
