import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-baiak-server');
}

export default function RuthlessChaos15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-baiak-server" />;
}
