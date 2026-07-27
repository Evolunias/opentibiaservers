import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-shadowcores-server');
}

export default function WithActivePlayersShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-shadowcores-server" />;
}
