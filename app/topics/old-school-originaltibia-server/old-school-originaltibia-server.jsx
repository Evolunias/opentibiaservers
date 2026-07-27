import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-server');
}

export default function OldSchoolOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-server" />;
}
