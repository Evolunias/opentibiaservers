import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-guide');
}

export default function OldSchoolNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-guide" />;
}
