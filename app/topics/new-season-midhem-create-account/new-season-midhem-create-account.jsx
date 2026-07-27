import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-create-account');
}

export default function NewSeasonMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-create-account" />;
}
