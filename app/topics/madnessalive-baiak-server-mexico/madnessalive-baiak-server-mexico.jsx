import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-mexico');
}

export default function MadnessaliveBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-mexico" />;
}
