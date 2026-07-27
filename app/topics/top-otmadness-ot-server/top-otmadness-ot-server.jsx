import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-ot-server');
}

export default function TopOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-ot-server" />;
}
