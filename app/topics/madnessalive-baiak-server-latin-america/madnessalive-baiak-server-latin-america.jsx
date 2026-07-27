import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-latin-america');
}

export default function MadnessaliveBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-latin-america" />;
}
