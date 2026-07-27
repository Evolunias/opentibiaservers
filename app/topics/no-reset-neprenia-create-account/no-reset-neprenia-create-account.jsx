import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-create-account');
}

export default function NoResetNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-create-account" />;
}
