import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-discord');
}

export default function WithDiscordShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-discord" />;
}
