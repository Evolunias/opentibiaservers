import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-ot');
}

export default function WithDiscordShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-ot" />;
}
