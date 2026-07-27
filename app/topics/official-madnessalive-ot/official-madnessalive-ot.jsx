import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-ot');
}

export default function OfficialMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-ot" />;
}
