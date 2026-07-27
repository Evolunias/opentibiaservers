import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-server');
}

export default function OtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-server" />;
}
