import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-create-account');
}

export default function TopSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-create-account" />;
}
