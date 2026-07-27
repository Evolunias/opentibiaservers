import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-uk');
}

export default function RealeraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-uk" />;
}
