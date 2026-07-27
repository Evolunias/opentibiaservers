import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-south-america');
}

export default function MidhemPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-south-america" />;
}
