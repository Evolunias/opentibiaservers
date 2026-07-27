import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-login');
}

export default function OldSchoolSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-login" />;
}
