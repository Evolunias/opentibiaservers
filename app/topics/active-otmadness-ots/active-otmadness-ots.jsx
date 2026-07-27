import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-ots');
}

export default function ActiveOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-ots" />;
}
