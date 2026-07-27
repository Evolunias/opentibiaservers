import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-rules');
}

export default function LowrateMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-rules" />;
}
