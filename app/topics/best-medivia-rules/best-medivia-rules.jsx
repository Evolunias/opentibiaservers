import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-rules');
}

export default function BestMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-rules" />;
}
