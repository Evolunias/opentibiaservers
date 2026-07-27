import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-create-account');
}

export default function LowrateClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-create-account" />;
}
