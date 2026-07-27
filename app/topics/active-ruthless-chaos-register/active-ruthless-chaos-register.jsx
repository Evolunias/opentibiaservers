import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-register');
}

export default function ActiveRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-register" />;
}
