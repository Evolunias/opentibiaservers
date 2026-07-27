import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-ot');
}

export default function OldSchoolRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-ot" />;
}
