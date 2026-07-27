import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-ot-server');
}

export default function CustomOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-ot-server" />;
}
