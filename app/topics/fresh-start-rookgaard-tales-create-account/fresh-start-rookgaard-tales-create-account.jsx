import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-create-account');
}

export default function FreshStartRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-create-account" />;
}
