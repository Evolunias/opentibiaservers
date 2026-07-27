import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-europe');
}

export default function MidhemPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-europe" />;
}
