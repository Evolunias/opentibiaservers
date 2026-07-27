import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-rules');
}

export default function CustomMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-rules" />;
}
