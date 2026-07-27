import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-tibia');
}

export default function OldSchoolTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-tibia" />;
}
