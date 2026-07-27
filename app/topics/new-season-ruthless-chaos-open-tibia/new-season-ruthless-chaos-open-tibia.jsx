import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-open-tibia');
}

export default function NewSeasonRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-open-tibia" />;
}
