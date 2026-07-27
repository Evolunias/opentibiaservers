import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-create-account');
}

export default function PopularRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-create-account" />;
}
