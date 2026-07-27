import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-create-account');
}

export default function FreshStartSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-create-account" />;
}
