import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-old-school-tibia');
}

export default function VineraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="vinera-old-school-tibia" />;
}
