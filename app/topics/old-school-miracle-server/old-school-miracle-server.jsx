import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-server');
}

export default function OldSchoolMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-server" />;
}
