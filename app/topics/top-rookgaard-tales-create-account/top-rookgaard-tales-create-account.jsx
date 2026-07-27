import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-create-account');
}

export default function TopRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-create-account" />;
}
