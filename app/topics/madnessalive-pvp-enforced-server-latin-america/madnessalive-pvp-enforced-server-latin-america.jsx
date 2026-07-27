import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-latin-america');
}

export default function MadnessalivePvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-latin-america" />;
}
