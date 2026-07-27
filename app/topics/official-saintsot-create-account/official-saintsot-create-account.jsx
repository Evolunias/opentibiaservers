import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-create-account');
}

export default function OfficialSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-create-account" />;
}
