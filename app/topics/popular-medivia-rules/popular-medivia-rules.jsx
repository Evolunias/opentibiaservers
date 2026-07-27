import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-rules');
}

export default function PopularMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-rules" />;
}
