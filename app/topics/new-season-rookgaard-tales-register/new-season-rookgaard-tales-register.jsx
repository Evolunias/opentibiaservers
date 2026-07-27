import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-register');
}

export default function NewSeasonRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-register" />;
}
