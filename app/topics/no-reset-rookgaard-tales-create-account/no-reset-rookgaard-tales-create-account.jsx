import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-create-account');
}

export default function NoResetRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-create-account" />;
}
