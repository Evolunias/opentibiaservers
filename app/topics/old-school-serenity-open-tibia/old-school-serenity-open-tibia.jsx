import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-open-tibia');
}

export default function OldSchoolSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-open-tibia" />;
}
