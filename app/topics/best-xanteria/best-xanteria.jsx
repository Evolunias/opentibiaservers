import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria');
}

export default function BestXanteriaKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria" />;
}
