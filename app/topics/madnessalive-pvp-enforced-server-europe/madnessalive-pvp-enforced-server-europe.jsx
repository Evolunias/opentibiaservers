import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-europe');
}

export default function MadnessalivePvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-europe" />;
}
