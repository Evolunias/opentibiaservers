import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-server');
}

export default function WithDiscordShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-server" />;
}
