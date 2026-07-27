import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-create-account');
}

export default function PopularMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-create-account" />;
}
