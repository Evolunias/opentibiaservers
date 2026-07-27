import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-france');
}

export default function SerenityOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-france" />;
}
