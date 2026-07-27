import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-create-account');
}

export default function OfficialNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-create-account" />;
}
