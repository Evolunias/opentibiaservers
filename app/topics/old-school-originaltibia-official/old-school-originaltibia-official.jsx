import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-official');
}

export default function OldSchoolOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-official" />;
}
