import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-server');
}

export default function CustomRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-server" />;
}
