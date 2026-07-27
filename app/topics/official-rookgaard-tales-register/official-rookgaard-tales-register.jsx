import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-register');
}

export default function OfficialRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-register" />;
}
