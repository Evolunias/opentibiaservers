import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-rules');
}

export default function OfficialTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-rules" />;
}
