import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-rules');
}

export default function TibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="tibiame-rules" />;
}
