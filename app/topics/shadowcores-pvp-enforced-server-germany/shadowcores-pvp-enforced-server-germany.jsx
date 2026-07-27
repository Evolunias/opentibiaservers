import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-germany');
}

export default function ShadowcoresPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-germany" />;
}
