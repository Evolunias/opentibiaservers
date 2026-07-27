import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-create-account');
}

export default function BestNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-create-account" />;
}
