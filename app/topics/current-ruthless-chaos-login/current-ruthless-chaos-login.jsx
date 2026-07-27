import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-login');
}

export default function CurrentRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-login" />;
}
