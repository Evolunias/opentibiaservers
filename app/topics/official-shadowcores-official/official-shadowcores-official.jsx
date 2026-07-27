import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-official');
}

export default function OfficialShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-official" />;
}
