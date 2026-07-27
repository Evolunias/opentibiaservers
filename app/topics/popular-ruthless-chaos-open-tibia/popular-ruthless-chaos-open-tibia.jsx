import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-open-tibia');
}

export default function PopularRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-open-tibia" />;
}
