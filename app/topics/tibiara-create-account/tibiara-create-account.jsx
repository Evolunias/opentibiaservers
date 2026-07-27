import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-create-account');
}

export default function TibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibiara-create-account" />;
}
