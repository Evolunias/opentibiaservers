import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-create-account');
}

export default function CustomTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-create-account" />;
}
