import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-old-school-tibia');
}

export default function LiberaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="libera-old-school-tibia" />;
}
