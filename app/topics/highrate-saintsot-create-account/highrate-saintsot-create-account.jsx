import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-create-account');
}

export default function HighrateSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-create-account" />;
}
