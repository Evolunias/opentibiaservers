import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-canada');
}

export default function MadnessaliveBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-canada" />;
}
