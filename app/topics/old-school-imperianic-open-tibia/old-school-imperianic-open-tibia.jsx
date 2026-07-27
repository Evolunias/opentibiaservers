import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-open-tibia');
}

export default function OldSchoolImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-open-tibia" />;
}
