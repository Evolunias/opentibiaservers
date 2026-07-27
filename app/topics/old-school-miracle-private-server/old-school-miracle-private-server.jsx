import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-private-server');
}

export default function OldSchoolMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-private-server" />;
}
