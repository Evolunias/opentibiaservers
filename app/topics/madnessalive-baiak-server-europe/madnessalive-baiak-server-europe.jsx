import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-europe');
}

export default function MadnessaliveBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-europe" />;
}
