import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-rules');
}

export default function PopularXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-rules" />;
}
