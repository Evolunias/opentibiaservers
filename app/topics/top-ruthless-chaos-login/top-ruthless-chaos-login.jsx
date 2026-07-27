import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-login');
}

export default function TopRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-login" />;
}
