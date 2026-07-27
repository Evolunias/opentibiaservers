import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-server');
}

export default function NewSeasonShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-server" />;
}
