import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-create-account');
}

export default function CurrentTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-create-account" />;
}
