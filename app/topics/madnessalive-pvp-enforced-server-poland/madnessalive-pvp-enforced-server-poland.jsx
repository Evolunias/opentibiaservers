import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-poland');
}

export default function MadnessalivePvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-poland" />;
}
