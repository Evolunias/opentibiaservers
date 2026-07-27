import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-private-server');
}

export default function ActiveRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-private-server" />;
}
