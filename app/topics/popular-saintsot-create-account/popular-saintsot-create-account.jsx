import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-create-account');
}

export default function PopularSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-create-account" />;
}
