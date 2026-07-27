import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-register');
}

export default function RuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-register" />;
}
