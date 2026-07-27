import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-non-pvp-server');
}

export default function Oxygenot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-non-pvp-server" />;
}
