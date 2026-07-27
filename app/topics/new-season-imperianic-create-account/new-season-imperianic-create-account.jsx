import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-create-account');
}

export default function NewSeasonImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-create-account" />;
}
