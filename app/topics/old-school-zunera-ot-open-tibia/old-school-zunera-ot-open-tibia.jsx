import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-open-tibia');
}

export default function OldSchoolZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-open-tibia" />;
}
