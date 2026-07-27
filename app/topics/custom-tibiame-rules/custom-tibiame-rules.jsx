import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-rules');
}

export default function CustomTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-rules" />;
}
