import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-guide');
}

export default function OldSchoolXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-guide" />;
}
