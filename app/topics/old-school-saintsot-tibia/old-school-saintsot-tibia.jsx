import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-tibia');
}

export default function OldSchoolSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-tibia" />;
}
