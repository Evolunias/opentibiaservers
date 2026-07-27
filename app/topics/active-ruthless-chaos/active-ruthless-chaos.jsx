import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos');
}

export default function ActiveRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos" />;
}
