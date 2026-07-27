import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-login');
}

export default function NewRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-login" />;
}
