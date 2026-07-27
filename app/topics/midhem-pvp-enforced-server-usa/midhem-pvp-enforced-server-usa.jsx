import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-usa');
}

export default function MidhemPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-usa" />;
}
