import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-create-account');
}

export default function BestSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-create-account" />;
}
