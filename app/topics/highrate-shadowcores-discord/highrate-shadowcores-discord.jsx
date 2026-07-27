import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-discord');
}

export default function HighrateShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-discord" />;
}
