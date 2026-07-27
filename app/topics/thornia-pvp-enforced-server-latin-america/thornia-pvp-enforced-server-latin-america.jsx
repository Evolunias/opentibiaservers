import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-latin-america');
}

export default function ThorniaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-latin-america" />;
}
