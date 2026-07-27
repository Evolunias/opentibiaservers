import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-server');
}

export default function CurrentOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-server" />;
}
