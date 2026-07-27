import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-create-account');
}

export default function NoResetTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-create-account" />;
}
