import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-create-account');
}

export default function TopTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-create-account" />;
}
