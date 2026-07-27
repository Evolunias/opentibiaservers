import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-uk');
}

export default function MadnessalivePvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-uk" />;
}
