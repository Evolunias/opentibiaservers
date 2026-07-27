import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-ots');
}

export default function OfficialShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-ots" />;
}
