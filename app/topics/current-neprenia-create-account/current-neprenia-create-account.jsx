import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-create-account');
}

export default function CurrentNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-create-account" />;
}
