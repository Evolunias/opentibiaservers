import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-create-account');
}

export default function NoResetXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-create-account" />;
}
