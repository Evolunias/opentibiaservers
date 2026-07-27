import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-germany');
}

export default function DuraOnlinePvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-germany" />;
}
