import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-create-account');
}

export default function BestSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-create-account" />;
}
