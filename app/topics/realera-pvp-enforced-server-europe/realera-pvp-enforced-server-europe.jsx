import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-europe');
}

export default function RealeraPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-europe" />;
}
