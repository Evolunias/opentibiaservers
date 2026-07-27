import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-create-account');
}

export default function LowrateAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-create-account" />;
}
