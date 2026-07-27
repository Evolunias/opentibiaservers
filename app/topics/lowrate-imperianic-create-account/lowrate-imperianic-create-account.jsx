import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-create-account');
}

export default function LowrateImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-create-account" />;
}
