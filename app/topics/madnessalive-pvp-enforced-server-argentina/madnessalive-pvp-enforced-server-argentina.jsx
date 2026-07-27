import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-argentina');
}

export default function MadnessalivePvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-argentina" />;
}
