import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-rules');
}

export default function ArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-rules" />;
}
