import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-brazil');
}

export default function OldSchoolOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-brazil" />;
}
