import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-germany');
}

export default function MadnessaliveBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-germany" />;
}
