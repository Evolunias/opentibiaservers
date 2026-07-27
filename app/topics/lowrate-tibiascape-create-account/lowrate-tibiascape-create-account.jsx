import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-create-account');
}

export default function LowrateTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-create-account" />;
}
