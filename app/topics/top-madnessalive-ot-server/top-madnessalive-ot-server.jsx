import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-ot-server');
}

export default function TopMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-ot-server" />;
}
