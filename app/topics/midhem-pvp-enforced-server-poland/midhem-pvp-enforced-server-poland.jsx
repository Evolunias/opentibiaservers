import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-poland');
}

export default function MidhemPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-poland" />;
}
