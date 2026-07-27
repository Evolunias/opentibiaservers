import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-guide');
}

export default function OldSchoolSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-guide" />;
}
