import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-old-school-tibia');
}

export default function NeranaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="nerana-old-school-tibia" />;
}
