import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-create-account');
}

export default function CustomSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-create-account" />;
}
