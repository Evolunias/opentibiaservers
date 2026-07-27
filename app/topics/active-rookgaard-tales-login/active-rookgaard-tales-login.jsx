import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-login');
}

export default function ActiveRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-login" />;
}
