import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-rules');
}

export default function CustomArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-rules" />;
}
