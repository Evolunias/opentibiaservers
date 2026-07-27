import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-rules');
}

export default function CurrentMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-rules" />;
}
