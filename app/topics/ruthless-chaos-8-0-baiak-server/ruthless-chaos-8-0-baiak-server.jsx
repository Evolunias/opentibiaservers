import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-0-baiak-server');
}

export default function RuthlessChaos80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-0-baiak-server" />;
}
