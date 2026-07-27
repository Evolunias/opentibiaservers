import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-create-account');
}

export default function CustomNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-create-account" />;
}
