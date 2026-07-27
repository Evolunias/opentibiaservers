import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-private-server');
}

export default function OldSchoolOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-private-server" />;
}
