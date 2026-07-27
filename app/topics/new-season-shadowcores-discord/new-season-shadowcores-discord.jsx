import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-discord');
}

export default function NewSeasonShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-discord" />;
}
