import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-france');
}

export default function MadnessalivePvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-france" />;
}
