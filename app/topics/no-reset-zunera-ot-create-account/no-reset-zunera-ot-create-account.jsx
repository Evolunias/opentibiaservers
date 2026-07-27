import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-create-account');
}

export default function NoResetZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-create-account" />;
}
