import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-login');
}

export default function PopularRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-login" />;
}
