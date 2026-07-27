import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-discord');
}

export default function LowrateShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-discord" />;
}
