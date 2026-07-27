import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-create-account');
}

export default function NewTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-create-account" />;
}
