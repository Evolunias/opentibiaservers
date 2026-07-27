import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-client');
}

export default function OfficialShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-client" />;
}
