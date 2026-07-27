import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-argentina-servers');
}

export default function OtmadnessArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-argentina-servers" />;
}
