import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-server');
}

export default function CustomOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-server" />;
}
