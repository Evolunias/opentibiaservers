import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-oxygenot-server');
}

export default function NonPvpOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-oxygenot-server" />;
}
