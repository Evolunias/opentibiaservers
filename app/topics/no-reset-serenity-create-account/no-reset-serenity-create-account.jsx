import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-create-account');
}

export default function NoResetSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-create-account" />;
}
