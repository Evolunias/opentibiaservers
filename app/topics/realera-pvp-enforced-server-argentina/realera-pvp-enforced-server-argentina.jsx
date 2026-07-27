import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-argentina');
}

export default function RealeraPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-argentina" />;
}
