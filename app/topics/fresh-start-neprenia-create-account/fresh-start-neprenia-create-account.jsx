import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-create-account');
}

export default function FreshStartNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-create-account" />;
}
