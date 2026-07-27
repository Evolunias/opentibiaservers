import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-argentina-server');
}

export default function OtmadnessArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-argentina-server" />;
}
