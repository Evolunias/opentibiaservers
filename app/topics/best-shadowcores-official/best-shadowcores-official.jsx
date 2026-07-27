import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-official');
}

export default function BestShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-official" />;
}
