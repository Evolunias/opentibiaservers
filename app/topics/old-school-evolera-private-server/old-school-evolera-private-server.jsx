import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-private-server');
}

export default function OldSchoolEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-private-server" />;
}
