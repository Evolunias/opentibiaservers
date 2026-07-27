import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-otmadness-server');
}

export default function BaiakOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-otmadness-server" />;
}
