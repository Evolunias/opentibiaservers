import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-germany-server');
}

export default function OtmadnessGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-germany-server" />;
}
