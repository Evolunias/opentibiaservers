import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-poland');
}

export default function MadnessaliveBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-poland" />;
}
