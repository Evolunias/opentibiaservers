import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-private-server');
}

export default function OldSchoolTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-private-server" />;
}
