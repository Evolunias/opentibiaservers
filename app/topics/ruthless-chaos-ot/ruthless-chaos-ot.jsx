import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-ot');
}

export default function RuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-ot" />;
}
