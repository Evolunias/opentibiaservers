import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-argentina');
}

export default function ThaisotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-argentina" />;
}
