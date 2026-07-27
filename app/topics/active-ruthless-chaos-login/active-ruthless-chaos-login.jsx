import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-login');
}

export default function ActiveRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-login" />;
}
