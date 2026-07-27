import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-rules');
}

export default function LowrateXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-rules" />;
}
