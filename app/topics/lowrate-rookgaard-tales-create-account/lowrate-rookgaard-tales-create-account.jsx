import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-create-account');
}

export default function LowrateRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-create-account" />;
}
