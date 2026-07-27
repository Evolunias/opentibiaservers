import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-rules');
}

export default function CustomMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-rules" />;
}
