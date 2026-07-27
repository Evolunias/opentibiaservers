import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-mexico');
}

export default function ThaisotPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-mexico" />;
}
