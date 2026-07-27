import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-create-account');
}

export default function RookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-create-account" />;
}
