import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-register');
}

export default function CurrentRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-register" />;
}
