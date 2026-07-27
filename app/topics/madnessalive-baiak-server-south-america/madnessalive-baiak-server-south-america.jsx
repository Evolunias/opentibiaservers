import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-south-america');
}

export default function MadnessaliveBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-south-america" />;
}
