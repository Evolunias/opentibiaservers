import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-discord');
}

export default function CurrentShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-discord" />;
}
