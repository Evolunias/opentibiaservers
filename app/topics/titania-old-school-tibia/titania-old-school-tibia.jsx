import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-old-school-tibia');
}

export default function TitaniaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="titania-old-school-tibia" />;
}
