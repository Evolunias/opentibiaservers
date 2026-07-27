import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-open-tibia');
}

export default function OldSchoolTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-open-tibia" />;
}
