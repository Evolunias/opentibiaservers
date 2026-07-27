import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-rules');
}

export default function ActiveKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-rules" />;
}
