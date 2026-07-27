import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-tibia');
}

export default function OldSchoolZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-tibia" />;
}
