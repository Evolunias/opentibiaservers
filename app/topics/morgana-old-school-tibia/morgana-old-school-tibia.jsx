import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-old-school-tibia');
}

export default function MorganaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="morgana-old-school-tibia" />;
}
