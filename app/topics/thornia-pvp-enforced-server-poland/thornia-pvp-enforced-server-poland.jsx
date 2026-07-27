import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-poland');
}

export default function ThorniaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-poland" />;
}
