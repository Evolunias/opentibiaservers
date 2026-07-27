import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-create-account');
}

export default function BestMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-create-account" />;
}
