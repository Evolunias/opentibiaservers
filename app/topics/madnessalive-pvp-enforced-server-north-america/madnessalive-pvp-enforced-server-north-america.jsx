import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-north-america');
}

export default function MadnessalivePvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-north-america" />;
}
