import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-mexico');
}

export default function ThorniaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-mexico" />;
}
