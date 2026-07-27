import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-baiak-server');
}

export default function RuthlessChaos14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-baiak-server" />;
}
