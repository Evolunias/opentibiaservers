import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-europe');
}

export default function ThorniaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-europe" />;
}
