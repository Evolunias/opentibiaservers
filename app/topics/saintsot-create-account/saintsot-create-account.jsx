import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-create-account');
}

export default function SaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="saintsot-create-account" />;
}
