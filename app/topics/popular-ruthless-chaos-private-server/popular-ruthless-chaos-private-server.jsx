import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-private-server');
}

export default function PopularRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-private-server" />;
}
