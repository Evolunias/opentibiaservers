import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-create-account');
}

export default function ActiveSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-create-account" />;
}
