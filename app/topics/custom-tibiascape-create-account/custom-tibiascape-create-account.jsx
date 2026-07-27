import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-create-account');
}

export default function CustomTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-create-account" />;
}
