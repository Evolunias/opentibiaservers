import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-register');
}

export default function CustomRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-register" />;
}
