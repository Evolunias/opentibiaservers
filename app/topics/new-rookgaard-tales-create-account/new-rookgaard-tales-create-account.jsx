import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-create-account');
}

export default function NewRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-create-account" />;
}
