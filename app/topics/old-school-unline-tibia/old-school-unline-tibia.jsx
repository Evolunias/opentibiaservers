import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-tibia');
}

export default function OldSchoolUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-tibia" />;
}
