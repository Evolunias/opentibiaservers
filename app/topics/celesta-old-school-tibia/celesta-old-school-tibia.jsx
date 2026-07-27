import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-old-school-tibia');
}

export default function CelestaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="celesta-old-school-tibia" />;
}
