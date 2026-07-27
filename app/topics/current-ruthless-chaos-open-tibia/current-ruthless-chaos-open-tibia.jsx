import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-open-tibia');
}

export default function CurrentRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-open-tibia" />;
}
