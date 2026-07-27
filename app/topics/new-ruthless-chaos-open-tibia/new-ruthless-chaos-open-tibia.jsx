import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-open-tibia');
}

export default function NewRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-open-tibia" />;
}
