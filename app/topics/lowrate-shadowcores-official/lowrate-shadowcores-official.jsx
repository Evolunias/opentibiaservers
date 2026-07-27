import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-official');
}

export default function LowrateShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-official" />;
}
