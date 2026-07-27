import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-create-account');
}

export default function LowrateClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-create-account" />;
}
