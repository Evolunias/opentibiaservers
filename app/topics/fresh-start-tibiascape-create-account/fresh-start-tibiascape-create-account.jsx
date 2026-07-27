import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-create-account');
}

export default function FreshStartTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-create-account" />;
}
