import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-create-account');
}

export default function NewAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-create-account" />;
}
