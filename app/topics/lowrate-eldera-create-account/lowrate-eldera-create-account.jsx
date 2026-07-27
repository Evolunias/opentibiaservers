import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-create-account');
}

export default function LowrateElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-create-account" />;
}
