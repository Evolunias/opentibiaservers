import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-rules');
}

export default function CarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="carlinot-rules" />;
}
