import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-ot-server');
}

export default function OldSchoolMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-ot-server" />;
}
