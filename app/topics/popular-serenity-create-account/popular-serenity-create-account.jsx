import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-create-account');
}

export default function PopularSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-create-account" />;
}
