import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-create-account');
}

export default function NoResetSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-create-account" />;
}
