import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-mexico');
}

export default function RealeraPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-mexico" />;
}
