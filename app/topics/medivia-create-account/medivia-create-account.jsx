import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-create-account');
}

export default function MediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="medivia-create-account" />;
}
