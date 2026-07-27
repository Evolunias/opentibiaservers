import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-create-account');
}

export default function TibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-create-account" />;
}
