import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-register');
}

export default function NewRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-register" />;
}
