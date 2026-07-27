import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-france');
}

export default function OldSchoolOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-france" />;
}
