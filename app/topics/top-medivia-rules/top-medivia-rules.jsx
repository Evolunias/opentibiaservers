import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-rules');
}

export default function TopMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-rules" />;
}
