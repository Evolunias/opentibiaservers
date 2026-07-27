import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-create-account');
}

export default function NoResetTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-create-account" />;
}
