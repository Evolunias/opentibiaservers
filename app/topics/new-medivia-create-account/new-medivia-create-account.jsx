import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-create-account');
}

export default function NewMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-create-account" />;
}
