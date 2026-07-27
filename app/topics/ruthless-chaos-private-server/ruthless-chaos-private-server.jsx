import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-private-server');
}

export default function RuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-private-server" />;
}
