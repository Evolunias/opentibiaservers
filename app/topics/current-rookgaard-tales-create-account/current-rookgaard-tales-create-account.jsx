import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-create-account');
}

export default function CurrentRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-create-account" />;
}
