import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-france');
}

export default function MadnessaliveBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-france" />;
}
