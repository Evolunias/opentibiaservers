import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales');
}

export default function OldSchoolRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales" />;
}
