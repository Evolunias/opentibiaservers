import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-login');
}

export default function WithDiscordShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-login" />;
}
