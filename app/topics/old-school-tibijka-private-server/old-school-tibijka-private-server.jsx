import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-private-server');
}

export default function OldSchoolTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-private-server" />;
}
