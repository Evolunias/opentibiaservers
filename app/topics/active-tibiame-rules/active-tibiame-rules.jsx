import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-rules');
}

export default function ActiveTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-rules" />;
}
