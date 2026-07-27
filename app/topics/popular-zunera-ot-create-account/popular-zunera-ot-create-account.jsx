import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-create-account');
}

export default function PopularZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-create-account" />;
}
