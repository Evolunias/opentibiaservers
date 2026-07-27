import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-create-account');
}

export default function TopXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-create-account" />;
}
