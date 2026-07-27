import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-old-school-tibia');
}

export default function KyraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="kyra-old-school-tibia" />;
}
