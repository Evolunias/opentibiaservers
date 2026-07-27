import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-rules');
}

export default function VenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="venoreot-rules" />;
}
