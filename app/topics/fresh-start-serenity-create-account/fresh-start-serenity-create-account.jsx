import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-create-account');
}

export default function FreshStartSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-create-account" />;
}
