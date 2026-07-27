import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-server');
}

export default function TopOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-server" />;
}
