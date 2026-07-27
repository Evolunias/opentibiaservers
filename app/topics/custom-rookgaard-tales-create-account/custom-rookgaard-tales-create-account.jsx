import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-create-account');
}

export default function CustomRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-create-account" />;
}
