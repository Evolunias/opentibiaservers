import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-discord');
}

export default function PopularShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-discord" />;
}
