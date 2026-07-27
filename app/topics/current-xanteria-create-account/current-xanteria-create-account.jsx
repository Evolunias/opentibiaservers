import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-create-account');
}

export default function CurrentXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-create-account" />;
}
