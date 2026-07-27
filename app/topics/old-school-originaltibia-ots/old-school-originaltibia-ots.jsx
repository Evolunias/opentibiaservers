import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-ots');
}

export default function OldSchoolOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-ots" />;
}
