import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-argentina');
}

export default function CanobPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-argentina" />;
}
