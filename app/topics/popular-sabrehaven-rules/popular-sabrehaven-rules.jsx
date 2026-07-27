import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-rules');
}

export default function PopularSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-rules" />;
}
