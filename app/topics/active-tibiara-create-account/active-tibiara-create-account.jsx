import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-create-account');
}

export default function ActiveTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-create-account" />;
}
