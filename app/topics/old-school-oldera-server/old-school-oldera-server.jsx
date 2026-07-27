import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-server');
}

export default function OldSchoolOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-server" />;
}
