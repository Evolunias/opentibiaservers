import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-baiak-server');
}

export default function RuthlessChaos100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-baiak-server" />;
}
