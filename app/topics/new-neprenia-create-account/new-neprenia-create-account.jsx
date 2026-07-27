import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-create-account');
}

export default function NewNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-create-account" />;
}
