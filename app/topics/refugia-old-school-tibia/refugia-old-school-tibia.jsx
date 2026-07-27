import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-old-school-tibia');
}

export default function RefugiaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="refugia-old-school-tibia" />;
}
