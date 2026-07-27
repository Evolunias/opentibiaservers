import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-ot-server');
}

export default function OtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-ot-server" />;
}
