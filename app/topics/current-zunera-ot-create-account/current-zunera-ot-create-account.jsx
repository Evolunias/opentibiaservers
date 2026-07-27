import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-create-account');
}

export default function CurrentZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-create-account" />;
}
