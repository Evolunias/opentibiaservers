import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-guide');
}

export default function OldSchoolCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-guide" />;
}
