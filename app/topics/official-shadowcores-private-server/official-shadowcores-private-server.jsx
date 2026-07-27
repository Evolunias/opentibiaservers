import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-private-server');
}

export default function OfficialShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-private-server" />;
}
