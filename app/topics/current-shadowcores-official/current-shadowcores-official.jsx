import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-official');
}

export default function CurrentShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-official" />;
}
