import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-usa');
}

export default function MadnessalivePvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-usa" />;
}
