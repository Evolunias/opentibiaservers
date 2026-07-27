import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-ots');
}

export default function WithDiscordShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-ots" />;
}
