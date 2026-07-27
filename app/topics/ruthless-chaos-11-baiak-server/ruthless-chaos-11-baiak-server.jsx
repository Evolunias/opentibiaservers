import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-baiak-server');
}

export default function RuthlessChaos11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-baiak-server" />;
}
