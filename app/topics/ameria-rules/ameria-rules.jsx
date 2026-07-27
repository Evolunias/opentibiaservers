import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-rules');
}

export default function AmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="ameria-rules" />;
}
