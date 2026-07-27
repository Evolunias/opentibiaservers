import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-rules');
}

export default function FreshStartXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-rules" />;
}
