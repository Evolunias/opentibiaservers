import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-brazil');
}

export default function OtmadnessHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-brazil" />;
}
