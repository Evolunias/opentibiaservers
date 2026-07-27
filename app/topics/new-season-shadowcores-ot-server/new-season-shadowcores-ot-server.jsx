import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-ot-server');
}

export default function NewSeasonShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-ot-server" />;
}
