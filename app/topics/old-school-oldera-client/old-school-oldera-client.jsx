import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-client');
}

export default function OldSchoolOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-client" />;
}
