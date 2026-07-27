import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-open-tibia');
}

export default function CustomRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-open-tibia" />;
}
