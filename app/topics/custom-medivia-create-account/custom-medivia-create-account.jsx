import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-create-account');
}

export default function CustomMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-create-account" />;
}
