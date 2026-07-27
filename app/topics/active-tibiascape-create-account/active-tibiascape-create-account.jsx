import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-create-account');
}

export default function ActiveTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-create-account" />;
}
