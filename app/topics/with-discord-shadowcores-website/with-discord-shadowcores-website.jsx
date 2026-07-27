import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-website');
}

export default function WithDiscordShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-website" />;
}
