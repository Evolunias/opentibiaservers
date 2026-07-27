import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-private-server');
}

export default function OldSchoolTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-private-server" />;
}
