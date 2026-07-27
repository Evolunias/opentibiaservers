import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-ots');
}

export default function OtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-ots" />;
}
