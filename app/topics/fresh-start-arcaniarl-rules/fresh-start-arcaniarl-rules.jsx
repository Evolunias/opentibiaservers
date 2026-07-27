import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-rules');
}

export default function FreshStartArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-rules" />;
}
