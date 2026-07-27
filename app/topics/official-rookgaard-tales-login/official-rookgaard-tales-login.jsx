import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-login');
}

export default function OfficialRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-login" />;
}
