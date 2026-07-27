import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-rules');
}

export default function CurrentXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-rules" />;
}
