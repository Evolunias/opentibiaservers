import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-south-america');
}

export default function SerenityOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-south-america" />;
}
