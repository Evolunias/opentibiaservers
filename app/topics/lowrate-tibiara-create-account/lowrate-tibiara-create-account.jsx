import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-create-account');
}

export default function LowrateTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-create-account" />;
}
