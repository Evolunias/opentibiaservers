import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-old-school-tibia');
}

export default function SoleraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="solera-old-school-tibia" />;
}
