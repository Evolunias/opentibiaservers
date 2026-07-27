import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-server');
}

export default function NewRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-server" />;
}
