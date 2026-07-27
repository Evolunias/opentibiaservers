import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-ot-server');
}

export default function OldSchoolRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-ot-server" />;
}
