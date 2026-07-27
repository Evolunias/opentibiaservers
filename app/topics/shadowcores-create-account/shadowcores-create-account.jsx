import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-create-account');
}

export default function ShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-create-account" />;
}
