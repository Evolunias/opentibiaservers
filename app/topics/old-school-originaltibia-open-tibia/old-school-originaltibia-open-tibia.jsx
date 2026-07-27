import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-open-tibia');
}

export default function OldSchoolOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-open-tibia" />;
}
