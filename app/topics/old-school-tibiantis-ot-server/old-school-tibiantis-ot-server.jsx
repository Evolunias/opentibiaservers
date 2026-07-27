import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-ot-server');
}

export default function OldSchoolTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-ot-server" />;
}
