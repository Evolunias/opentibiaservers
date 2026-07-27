import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-client');
}

export default function WithDiscordShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-client" />;
}
