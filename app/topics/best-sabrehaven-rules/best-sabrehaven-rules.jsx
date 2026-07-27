import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-rules');
}

export default function BestSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-rules" />;
}
