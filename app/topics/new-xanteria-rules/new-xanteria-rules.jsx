import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-rules');
}

export default function NewXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-rules" />;
}
