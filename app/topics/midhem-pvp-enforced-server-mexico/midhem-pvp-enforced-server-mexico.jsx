import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-mexico');
}

export default function MidhemPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-mexico" />;
}
