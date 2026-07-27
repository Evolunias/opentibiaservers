import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-uk');
}

export default function ThorniaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-uk" />;
}
