import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-create-account');
}

export default function BestXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-create-account" />;
}
