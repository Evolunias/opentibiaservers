import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-create-account');
}

export default function HighrateSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-create-account" />;
}
