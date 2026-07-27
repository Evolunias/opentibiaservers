import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-baiak-server');
}

export default function RuthlessChaos13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-baiak-server" />;
}
