import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-create-account');
}

export default function NoResetCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-create-account" />;
}
