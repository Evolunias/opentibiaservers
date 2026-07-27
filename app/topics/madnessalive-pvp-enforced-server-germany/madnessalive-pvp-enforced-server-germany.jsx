import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-germany');
}

export default function MadnessalivePvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-germany" />;
}
