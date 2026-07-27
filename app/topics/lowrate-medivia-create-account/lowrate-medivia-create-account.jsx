import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-create-account');
}

export default function LowrateMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-create-account" />;
}
