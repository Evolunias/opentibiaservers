import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-client');
}

export default function CustomRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-client" />;
}
