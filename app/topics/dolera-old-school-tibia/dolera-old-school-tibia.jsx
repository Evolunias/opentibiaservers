import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-old-school-tibia');
}

export default function DoleraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="dolera-old-school-tibia" />;
}
