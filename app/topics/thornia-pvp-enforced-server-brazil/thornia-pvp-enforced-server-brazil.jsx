import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-brazil');
}

export default function ThorniaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-brazil" />;
}
