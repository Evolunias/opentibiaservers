import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-tibia');
}

export default function OldSchoolSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-tibia" />;
}
