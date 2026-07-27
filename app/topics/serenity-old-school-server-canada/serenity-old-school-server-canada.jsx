import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-canada');
}

export default function SerenityOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-canada" />;
}
