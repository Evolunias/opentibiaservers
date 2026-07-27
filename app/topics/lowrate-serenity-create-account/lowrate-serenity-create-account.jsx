import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-create-account');
}

export default function LowrateSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-create-account" />;
}
