import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-rules');
}

export default function BestXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-rules" />;
}
