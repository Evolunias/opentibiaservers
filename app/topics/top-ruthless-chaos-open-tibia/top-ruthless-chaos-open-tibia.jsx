import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-open-tibia');
}

export default function TopRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-open-tibia" />;
}
