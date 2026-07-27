import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-ots');
}

export default function OldSchoolRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-ots" />;
}
