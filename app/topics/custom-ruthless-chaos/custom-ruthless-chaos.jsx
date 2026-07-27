import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos');
}

export default function CustomRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos" />;
}
