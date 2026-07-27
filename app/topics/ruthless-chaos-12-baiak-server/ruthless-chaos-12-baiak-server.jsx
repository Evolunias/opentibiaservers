import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-baiak-server');
}

export default function RuthlessChaos12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-baiak-server" />;
}
