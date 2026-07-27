import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-create-account');
}

export default function OldSchoolSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-create-account" />;
}
