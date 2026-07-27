import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-server');
}

export default function OldSchoolSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-server" />;
}
