import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-ots');
}

export default function OfficialOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-ots" />;
}
