import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-old-school-tibia');
}

export default function TrimeraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="trimera-old-school-tibia" />;
}
