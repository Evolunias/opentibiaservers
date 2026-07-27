import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-ot');
}

export default function ActiveRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-ot" />;
}
