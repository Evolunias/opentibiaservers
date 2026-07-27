import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-private-server');
}

export default function TopRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-private-server" />;
}
