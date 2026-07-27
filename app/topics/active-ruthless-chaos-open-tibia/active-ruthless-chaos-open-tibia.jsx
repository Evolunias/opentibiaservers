import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-open-tibia');
}

export default function ActiveRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-open-tibia" />;
}
