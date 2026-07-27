import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-official');
}

export default function HighrateShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-official" />;
}
