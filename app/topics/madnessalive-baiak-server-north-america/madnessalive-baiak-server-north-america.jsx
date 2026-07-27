import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-north-america');
}

export default function MadnessaliveBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-north-america" />;
}
