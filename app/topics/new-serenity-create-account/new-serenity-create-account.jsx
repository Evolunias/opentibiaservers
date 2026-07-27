import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-create-account');
}

export default function NewSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-create-account" />;
}
