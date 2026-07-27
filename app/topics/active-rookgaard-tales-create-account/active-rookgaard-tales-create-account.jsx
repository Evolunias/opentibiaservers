import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-create-account');
}

export default function ActiveRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-create-account" />;
}
