import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-create-account');
}

export default function ActiveSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-create-account" />;
}
