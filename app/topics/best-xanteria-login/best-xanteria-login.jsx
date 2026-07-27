import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-login');
}

export default function BestXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-login" />;
}
