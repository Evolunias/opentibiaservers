import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-create-account');
}

export default function NewShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-create-account" />;
}
