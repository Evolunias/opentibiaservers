import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores');
}

export default function WithDiscordShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores" />;
}
