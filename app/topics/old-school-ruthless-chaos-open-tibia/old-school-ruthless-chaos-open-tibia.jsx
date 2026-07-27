import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-open-tibia');
}

export default function OldSchoolRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-open-tibia" />;
}
