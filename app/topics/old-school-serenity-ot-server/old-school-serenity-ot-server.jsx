import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-ot-server');
}

export default function OldSchoolSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-ot-server" />;
}
