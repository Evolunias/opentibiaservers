import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-rules');
}

export default function CurrentTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-rules" />;
}
