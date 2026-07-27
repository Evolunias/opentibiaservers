import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera');
}

export default function OldSchoolOlderaKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera" />;
}
