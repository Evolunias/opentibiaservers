import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-create-account');
}

export default function CurrentMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-create-account" />;
}
