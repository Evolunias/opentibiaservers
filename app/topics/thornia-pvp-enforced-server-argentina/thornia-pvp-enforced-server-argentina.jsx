import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-argentina');
}

export default function ThorniaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-argentina" />;
}
