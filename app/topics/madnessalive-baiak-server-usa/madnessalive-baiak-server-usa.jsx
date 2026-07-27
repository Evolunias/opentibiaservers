import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-usa');
}

export default function MadnessaliveBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-usa" />;
}
