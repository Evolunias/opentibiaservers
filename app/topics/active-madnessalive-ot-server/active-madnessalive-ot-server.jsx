import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-ot-server');
}

export default function ActiveMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-ot-server" />;
}
