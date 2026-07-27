import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-rules');
}

export default function NewArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-rules" />;
}
