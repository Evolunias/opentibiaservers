import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-rules');
}

export default function FreshStartTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-rules" />;
}
