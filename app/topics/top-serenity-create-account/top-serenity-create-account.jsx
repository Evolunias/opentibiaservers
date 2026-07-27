import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-create-account');
}

export default function TopSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-create-account" />;
}
