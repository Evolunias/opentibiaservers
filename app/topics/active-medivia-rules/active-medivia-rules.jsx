import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-rules');
}

export default function ActiveMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-rules" />;
}
