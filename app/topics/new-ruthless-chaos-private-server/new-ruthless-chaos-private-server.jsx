import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-private-server');
}

export default function NewRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-private-server" />;
}
