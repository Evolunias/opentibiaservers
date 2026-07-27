import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-ot');
}

export default function CustomRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-ot" />;
}
