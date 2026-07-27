import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-create-account');
}

export default function LowrateBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-create-account" />;
}
