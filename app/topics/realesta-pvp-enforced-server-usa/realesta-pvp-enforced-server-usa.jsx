import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-usa');
}

export default function RealestaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-usa" />;
}
