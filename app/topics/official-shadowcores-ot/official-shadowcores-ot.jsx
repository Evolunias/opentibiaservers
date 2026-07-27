import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-ot');
}

export default function OfficialShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-ot" />;
}
