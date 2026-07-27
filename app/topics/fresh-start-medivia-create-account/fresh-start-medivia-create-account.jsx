import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-create-account');
}

export default function FreshStartMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-create-account" />;
}
