import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-register');
}

export default function CustomRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-register" />;
}
