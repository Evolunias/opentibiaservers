import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-login');
}

export default function CustomRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-login" />;
}
