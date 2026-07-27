import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-ot-server');
}

export default function OldSchoolOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-ot-server" />;
}
