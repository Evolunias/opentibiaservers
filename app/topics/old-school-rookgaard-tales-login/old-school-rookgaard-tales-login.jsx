import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-login');
}

export default function OldSchoolRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-login" />;
}
