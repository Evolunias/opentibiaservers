import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-france');
}

export default function MidhemPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-france" />;
}
