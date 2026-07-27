import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-ot');
}

export default function OldSchoolOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-ot" />;
}
