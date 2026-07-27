import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-open-tibia');
}

export default function BestRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-open-tibia" />;
}
