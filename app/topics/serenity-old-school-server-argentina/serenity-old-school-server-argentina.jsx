import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-argentina');
}

export default function SerenityOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-argentina" />;
}
