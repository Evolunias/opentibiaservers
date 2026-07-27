import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-create-account');
}

export default function FreshStartXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-create-account" />;
}
