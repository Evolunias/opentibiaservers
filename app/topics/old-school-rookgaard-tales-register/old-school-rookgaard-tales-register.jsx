import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-register');
}

export default function OldSchoolRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-register" />;
}
