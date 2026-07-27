import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-guide');
}

export default function OldSchoolCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-guide" />;
}
