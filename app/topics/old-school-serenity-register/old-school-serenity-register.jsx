import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-register');
}

export default function OldSchoolSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-register" />;
}
