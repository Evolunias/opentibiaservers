import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-argentina');
}

export default function MadnessaliveBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-argentina" />;
}
