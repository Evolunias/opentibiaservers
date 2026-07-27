import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-official');
}

export default function OldSchoolSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-official" />;
}
