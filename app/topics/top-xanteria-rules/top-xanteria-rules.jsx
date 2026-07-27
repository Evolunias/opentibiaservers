import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-rules');
}

export default function TopXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-rules" />;
}
