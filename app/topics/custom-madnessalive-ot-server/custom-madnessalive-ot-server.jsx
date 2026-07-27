import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-ot-server');
}

export default function CustomMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-ot-server" />;
}
