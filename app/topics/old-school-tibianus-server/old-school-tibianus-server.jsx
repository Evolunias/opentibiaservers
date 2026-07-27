import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-server');
}

export default function OldSchoolTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-server" />;
}
