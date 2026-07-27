import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-canada');
}

export default function MidhemPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-canada" />;
}
