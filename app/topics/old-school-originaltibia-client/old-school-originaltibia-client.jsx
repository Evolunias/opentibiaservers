import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-client');
}

export default function OldSchoolOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-client" />;
}
