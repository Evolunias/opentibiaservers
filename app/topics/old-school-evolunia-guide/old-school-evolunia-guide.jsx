import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-guide');
}

export default function OldSchoolEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-guide" />;
}
