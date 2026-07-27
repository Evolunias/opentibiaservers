import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-north-america');
}

export default function SerenityOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-north-america" />;
}
