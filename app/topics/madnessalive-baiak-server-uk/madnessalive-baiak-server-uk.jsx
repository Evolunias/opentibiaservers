import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-uk');
}

export default function MadnessaliveBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-uk" />;
}
