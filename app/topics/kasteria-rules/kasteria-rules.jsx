import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-rules');
}

export default function KasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="kasteria-rules" />;
}
