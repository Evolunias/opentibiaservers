import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-non-pvp-server');
}

export default function Oxygenot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-non-pvp-server" />;
}
