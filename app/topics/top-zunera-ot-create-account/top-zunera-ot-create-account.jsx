import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-create-account');
}

export default function TopZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-create-account" />;
}
