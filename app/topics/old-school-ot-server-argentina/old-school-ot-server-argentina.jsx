import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-argentina');
}

export default function OldSchoolOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-argentina" />;
}
