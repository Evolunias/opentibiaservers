import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-germany');
}

export default function UnlinePvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-germany" />;
}
