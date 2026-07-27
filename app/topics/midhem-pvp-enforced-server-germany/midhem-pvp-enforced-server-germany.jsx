import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-germany');
}

export default function MidhemPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-germany" />;
}
