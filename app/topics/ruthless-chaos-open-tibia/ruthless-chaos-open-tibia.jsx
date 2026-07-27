import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-open-tibia');
}

export default function RuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-open-tibia" />;
}
