import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-create-account');
}

export default function CustomSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-create-account" />;
}
