import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-rules');
}

export default function MediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="medivia-rules" />;
}
