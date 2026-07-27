import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-ot-server');
}

export default function WithDiscordShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-ot-server" />;
}
