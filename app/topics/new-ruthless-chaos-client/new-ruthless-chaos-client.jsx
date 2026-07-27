import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-client');
}

export default function NewRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-client" />;
}
