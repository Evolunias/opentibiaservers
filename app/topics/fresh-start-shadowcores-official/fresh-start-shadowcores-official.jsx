import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-official');
}

export default function FreshStartShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-official" />;
}
