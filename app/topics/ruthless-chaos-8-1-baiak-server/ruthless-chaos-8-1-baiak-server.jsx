import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-1-baiak-server');
}

export default function RuthlessChaos81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-1-baiak-server" />;
}
