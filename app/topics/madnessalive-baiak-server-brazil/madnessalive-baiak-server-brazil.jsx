import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-brazil');
}

export default function MadnessaliveBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-brazil" />;
}
