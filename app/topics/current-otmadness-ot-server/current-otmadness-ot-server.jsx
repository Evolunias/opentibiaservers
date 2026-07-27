import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-ot-server');
}

export default function CurrentOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-ot-server" />;
}
