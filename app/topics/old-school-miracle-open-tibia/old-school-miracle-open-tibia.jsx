import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-open-tibia');
}

export default function OldSchoolMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-open-tibia" />;
}
