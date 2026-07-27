import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-private-server');
}

export default function NewSeasonShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-private-server" />;
}
