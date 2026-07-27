import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-germany');
}

export default function AlasteraPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-germany" />;
}
