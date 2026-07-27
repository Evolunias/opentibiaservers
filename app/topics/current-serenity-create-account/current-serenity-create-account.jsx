import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-create-account');
}

export default function CurrentSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-create-account" />;
}
