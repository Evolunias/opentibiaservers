import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-server');
}

export default function OldSchoolTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-server" />;
}
