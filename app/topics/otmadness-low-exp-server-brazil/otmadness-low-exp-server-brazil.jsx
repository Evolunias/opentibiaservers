import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-brazil');
}

export default function OtmadnessLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-brazil" />;
}
