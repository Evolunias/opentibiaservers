import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-latin-america');
}

export default function SerenityOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-latin-america" />;
}
