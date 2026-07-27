import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-private-server');
}

export default function CurrentRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-private-server" />;
}
