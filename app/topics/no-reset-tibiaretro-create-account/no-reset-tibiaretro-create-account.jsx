import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-create-account');
}

export default function NoResetTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-create-account" />;
}
