import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-login');
}

export default function RuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-login" />;
}
