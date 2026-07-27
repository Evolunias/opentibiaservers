import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-create-account');
}

export default function BestTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-create-account" />;
}
