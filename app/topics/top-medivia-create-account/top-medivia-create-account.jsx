import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-create-account');
}

export default function TopMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-create-account" />;
}
