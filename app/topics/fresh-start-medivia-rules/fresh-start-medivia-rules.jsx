import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-rules');
}

export default function FreshStartMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-rules" />;
}
