import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-latin-america');
}

export default function MidhemPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-latin-america" />;
}
