import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-create-account');
}

export default function BestRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-create-account" />;
}
