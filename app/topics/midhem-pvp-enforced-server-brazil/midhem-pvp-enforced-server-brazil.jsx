import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-brazil');
}

export default function MidhemPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-brazil" />;
}
