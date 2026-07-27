import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-discord');
}

export default function TopShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-discord" />;
}
