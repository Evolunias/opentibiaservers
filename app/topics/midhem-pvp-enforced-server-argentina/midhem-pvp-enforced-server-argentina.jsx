import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-argentina');
}

export default function MidhemPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-argentina" />;
}
