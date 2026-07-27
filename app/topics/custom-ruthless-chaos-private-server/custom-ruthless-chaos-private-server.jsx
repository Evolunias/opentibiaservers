import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-private-server');
}

export default function CustomRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-private-server" />;
}
