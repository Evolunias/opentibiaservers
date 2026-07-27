import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-create-account');
}

export default function OfficialRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-create-account" />;
}
