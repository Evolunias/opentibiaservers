import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-latin-america');
}

export default function MadnessalivePvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-latin-america" />;
}
