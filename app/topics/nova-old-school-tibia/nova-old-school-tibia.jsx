import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-old-school-tibia');
}

export default function NovaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="nova-old-school-tibia" />;
}
