import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-create-account');
}

export default function FreshStartTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-create-account" />;
}
