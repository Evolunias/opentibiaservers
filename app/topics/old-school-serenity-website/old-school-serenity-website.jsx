import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-website');
}

export default function OldSchoolSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-website" />;
}
