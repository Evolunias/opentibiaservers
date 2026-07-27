import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-create-account');
}

export default function LowrateKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-create-account" />;
}
