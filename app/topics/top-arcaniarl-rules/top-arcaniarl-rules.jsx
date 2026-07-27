import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-rules');
}

export default function TopArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-rules" />;
}
