import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-guide');
}

export default function OldSchoolRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-guide" />;
}
