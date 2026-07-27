import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-create-account');
}

export default function TopTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-create-account" />;
}
