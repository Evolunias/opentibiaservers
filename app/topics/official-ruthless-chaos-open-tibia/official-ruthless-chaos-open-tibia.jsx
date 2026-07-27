import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-open-tibia');
}

export default function OfficialRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-open-tibia" />;
}
