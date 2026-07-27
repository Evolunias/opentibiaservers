import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-login');
}

export default function CustomRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-login" />;
}
