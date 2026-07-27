import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-create-account');
}

export default function SerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="serenity-create-account" />;
}
