import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-create-account');
}

export default function NewSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-create-account" />;
}
