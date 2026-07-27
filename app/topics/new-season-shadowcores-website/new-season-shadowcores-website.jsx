import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-website');
}

export default function NewSeasonShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-website" />;
}
