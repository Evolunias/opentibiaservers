import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-rules');
}

export default function NewMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-rules" />;
}
