import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-ot-server');
}

export default function OldSchoolSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-ot-server" />;
}
