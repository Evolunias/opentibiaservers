import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-login');
}

export default function NewSeasonShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-login" />;
}
