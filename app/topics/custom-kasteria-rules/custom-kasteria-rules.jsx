import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-rules');
}

export default function CustomKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-rules" />;
}
