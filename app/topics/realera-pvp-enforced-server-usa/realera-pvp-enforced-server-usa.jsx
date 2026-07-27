import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-usa');
}

export default function RealeraPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-usa" />;
}
