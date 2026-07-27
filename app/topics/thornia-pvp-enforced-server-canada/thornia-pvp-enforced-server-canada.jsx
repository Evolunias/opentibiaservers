import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-canada');
}

export default function ThorniaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-canada" />;
}
