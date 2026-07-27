import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-private-server');
}

export default function NoResetRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-private-server" />;
}
