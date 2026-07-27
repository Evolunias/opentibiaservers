import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-old-school-tibia');
}

export default function PremiaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="premia-old-school-tibia" />;
}
