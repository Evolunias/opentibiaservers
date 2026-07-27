import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-rules');
}

export default function TopSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-rules" />;
}
