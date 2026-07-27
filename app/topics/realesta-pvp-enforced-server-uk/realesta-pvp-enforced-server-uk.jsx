import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-uk');
}

export default function RealestaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-uk" />;
}
