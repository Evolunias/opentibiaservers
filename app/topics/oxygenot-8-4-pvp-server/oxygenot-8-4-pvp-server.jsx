import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-pvp-server');
}

export default function Oxygenot84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-pvp-server" />;
}
