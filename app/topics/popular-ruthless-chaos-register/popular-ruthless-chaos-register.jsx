import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-register');
}

export default function PopularRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-register" />;
}
