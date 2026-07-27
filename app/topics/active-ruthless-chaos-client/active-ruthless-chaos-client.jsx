import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-client');
}

export default function ActiveRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-client" />;
}
