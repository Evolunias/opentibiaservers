import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-create-account');
}

export default function NewSeasonSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-create-account" />;
}
