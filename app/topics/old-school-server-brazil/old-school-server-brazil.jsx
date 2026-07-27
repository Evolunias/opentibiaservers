import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-brazil');
}

export default function OldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-brazil" />;
}
