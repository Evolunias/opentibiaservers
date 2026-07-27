import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-ot-server');
}

export default function OldSchoolTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-ot-server" />;
}
