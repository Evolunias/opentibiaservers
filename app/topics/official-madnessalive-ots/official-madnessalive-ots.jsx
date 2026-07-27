import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-ots');
}

export default function OfficialMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-ots" />;
}
