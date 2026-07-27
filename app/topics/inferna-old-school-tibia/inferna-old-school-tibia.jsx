import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-old-school-tibia');
}

export default function InfernaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="inferna-old-school-tibia" />;
}
