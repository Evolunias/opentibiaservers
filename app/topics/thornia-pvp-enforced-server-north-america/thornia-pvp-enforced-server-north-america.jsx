import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-north-america');
}

export default function ThorniaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-north-america" />;
}
