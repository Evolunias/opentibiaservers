import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-uk');
}

export default function SerenityOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-uk" />;
}
