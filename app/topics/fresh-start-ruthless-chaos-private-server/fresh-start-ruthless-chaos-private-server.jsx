import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-private-server');
}

export default function FreshStartRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-private-server" />;
}
