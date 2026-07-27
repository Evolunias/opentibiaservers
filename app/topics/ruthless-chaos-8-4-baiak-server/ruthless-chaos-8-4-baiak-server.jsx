import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-baiak-server');
}

export default function RuthlessChaos84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-baiak-server" />;
}
