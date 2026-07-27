import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-tibia');
}

export default function OldSchoolImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-tibia" />;
}
