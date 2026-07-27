import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-create-account');
}

export default function NewSeasonNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-create-account" />;
}
