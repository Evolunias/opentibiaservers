import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-germany');
}

export default function ThorniaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-germany" />;
}
