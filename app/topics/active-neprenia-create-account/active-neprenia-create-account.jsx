import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-create-account');
}

export default function ActiveNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-create-account" />;
}
