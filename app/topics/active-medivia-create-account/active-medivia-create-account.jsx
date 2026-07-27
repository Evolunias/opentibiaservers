import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-create-account');
}

export default function ActiveMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-create-account" />;
}
