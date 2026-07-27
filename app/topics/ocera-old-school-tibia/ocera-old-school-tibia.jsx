import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-old-school-tibia');
}

export default function OceraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="ocera-old-school-tibia" />;
}
