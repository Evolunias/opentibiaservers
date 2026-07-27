import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-north-america');
}

export default function MidhemPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-north-america" />;
}
