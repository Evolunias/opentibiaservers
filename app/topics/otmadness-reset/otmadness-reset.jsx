import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-reset');
}

export default function OtmadnessResetKeywordPage() {
  return <StaticKeywordPage slug="otmadness-reset" />;
}
