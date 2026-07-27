import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-create-account');
}

export default function NewTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-create-account" />;
}
