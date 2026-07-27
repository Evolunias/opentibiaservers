import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-sweden');
}

export default function SerenityOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-sweden" />;
}
