import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-rules');
}

export default function LowrateTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-rules" />;
}
