import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-usa');
}

export default function ThorniaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-usa" />;
}
