import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-non-pvp-server');
}

export default function Oxygenot96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-non-pvp-server" />;
}
