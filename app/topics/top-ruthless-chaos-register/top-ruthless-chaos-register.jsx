import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-register');
}

export default function TopRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-register" />;
}
