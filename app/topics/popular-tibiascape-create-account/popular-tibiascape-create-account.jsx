import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-create-account');
}

export default function PopularTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-create-account" />;
}
